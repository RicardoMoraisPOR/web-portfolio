import { useGSAP } from '@gsap/react';
import * as Select from '@radix-ui/react-select';
import gsap from 'gsap';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import FlareCard from '@components/FlareCard/FlareCard';
import GlowEffect from '@components/GlowEffect/GlowEffect';
import MetaTag from '@components/MetaTag';
import {
  Content,
  Item,
  ItemText,
  ItemTextSecret,
  Label,
  SearchWrapper,
  Separator,
  StyledInput,
  TechItem,
  Trigger,
  UsesPageInfoWrapper,
  UsesPageTechWrapper,
  UsesPageWrapper,
  Viewport,
} from './uses.styles';
import { Action, Category, State, techsList } from './uses.types';

const UsesPage = () => {
  const theme = useTheme();
  const techRef = useRef<HTMLDivElement>(null);
  const techIntroRef = useRef<HTMLDivElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout>();

  const techMemo = useMemo(() => techsList(), []);

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SET_FIRST_ANIMATION':
        return { ...state, firstAnimation: action.payload };
      case 'SET_ANIMATE_SEARCH':
        return { ...state, animateSearch: action.payload };
      case 'SET_SEARCH_VALUE':
        return { ...state, searchValue: action.payload };
      case 'SET_SELECTED_VALUE':
        return { ...state, selectedValue: action.payload };
      case 'SET_SEARCHED':
        return { ...state, searched: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    firstAnimation: false,
    animateSearch: false,
    searchValue: '',
    selectedValue: 'all',
    searched: techMemo,
  });

  const onSelectedValue = useCallback(
    (value: Category) => {
      const searchedItems = techMemo.filter((tech) =>
        tech.name.toLowerCase().includes(state.searchValue.toLowerCase())
      );

      dispatch({ type: 'SET_SELECTED_VALUE', payload: value });

      if (techRef.current) {
        gsap.to(techRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          onComplete: () => {
            dispatch({ type: 'SET_ANIMATE_SEARCH', payload: true });
            if (value === 'all') {
              dispatch({ type: 'SET_SEARCHED', payload: searchedItems });
            } else {
              dispatch({
                type: 'SET_SEARCHED',
                payload: searchedItems.filter((tech) =>
                  tech.category.includes(value)
                ),
              });
            }
          },
        });
      }
    },
    [state.searchValue, techMemo]
  );

  const onInputValue = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      // Clear the previous timeout if it exists
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const value = e.target.value.toLowerCase();
        dispatch({ type: 'SET_SEARCH_VALUE', payload: value });

        const filteredItems = techsList().filter(
          (item) =>
            (state.selectedValue === 'all'
              ? true
              : item.category.includes(state.selectedValue)) &&
            item.name.toLowerCase().includes(value)
        );

        if (techRef.current) {
          gsap.to(techRef.current.children, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            onComplete: () => {
              dispatch({ type: 'SET_ANIMATE_SEARCH', payload: true });
              dispatch({ type: 'SET_SEARCHED', payload: filteredItems });
            },
          });
        }
      }, 500);
    },
    [state.selectedValue]
  );

  useEffect(() => {
    if (state.firstAnimation && state.animateSearch && techRef.current) {
      dispatch({ type: 'SET_ANIMATE_SEARCH', payload: false });
      const items = techRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 20, x: 5 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.15,
          stagger: 0.01,
          ease: 'sine.out',
        }
      );
    }
  }, [state.searched, state.firstAnimation, state.animateSearch]);

  useGSAP(() => {
    if (techRef.current) {
      const items = techRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 60, x: 5 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.2,
          stagger: 0.01,
          ease: 'sine.out',
          delay: 0.1,
          onComplete: () => {
            dispatch({ type: 'SET_FIRST_ANIMATION', payload: true });
          },
        }
      );
    }
  }, []);

  useGSAP(() => {
    if (techIntroRef.current) {
      gsap.fromTo(
        techIntroRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          zIndex: 2,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <UsesPageWrapper>
      <MetaTag />
      <UsesPageInfoWrapper ref={techIntroRef}>
        <h1>Uses Tech</h1>
        <span>
          Here's a collection of the tools, products and technologies I relied
          on to build software. Inspired by{' '}
          <Link to="https://uses.tech/" target="_blank">
            uses.tech
          </Link>
        </span>
        <SearchWrapper>
          <StyledInput
            placeholder="Search for a technology"
            onChange={onInputValue}
          />
          <Select.Root onValueChange={onSelectedValue}>
            <Trigger aria-label="Techs">
              <Select.Value placeholder="Select an category" />
            </Trigger>
            <Content position="popper" sideOffset={10}>
              <Viewport>
                <Item value="all">
                  <Select.ItemText>All</Select.ItemText>
                </Item>
                <Select.Group>
                  <Separator />
                  <Label>Personal Preference</Label>
                  <Separator />
                  <Item value="using">
                    <Select.ItemText>Using</Select.ItemText>
                  </Item>
                  <Item value="not-using">
                    <Select.ItemText>Not using</Select.ItemText>
                  </Item>
                  <Item value="love">
                    <Select.ItemText>Love it.</Select.ItemText>
                  </Item>
                  <Item value="hate">
                    <Select.ItemText>Hate it.</Select.ItemText>
                  </Item>
                </Select.Group>
                <Separator />
                <Select.Group>
                  <Label>Tech Type</Label>
                  <Separator />
                  <Item value="lang">
                    <Select.ItemText>Languages</Select.ItemText>
                  </Item>
                  <Item value="cloud">
                    <Select.ItemText>Cloud</Select.ItemText>
                  </Item>
                  <Item value="framework">
                    <Select.ItemText>Tools & Frameworks</Select.ItemText>
                  </Item>
                  <Item value="ui-ux">
                    <Select.ItemText>Styling</Select.ItemText>
                  </Item>
                  <Item value="testing">
                    <Select.ItemText>Testing</Select.ItemText>
                  </Item>
                  <Item value="bundler">
                    <Select.ItemText>Bundlers</Select.ItemText>
                  </Item>
                  <Item value="env">
                    <Select.ItemText>IDE / OS / ENV</Select.ItemText>
                  </Item>
                  <Item value="web-tool">
                    <Select.ItemText>Web Tools</Select.ItemText>
                  </Item>
                </Select.Group>
              </Viewport>
            </Content>
          </Select.Root>
        </SearchWrapper>
      </UsesPageInfoWrapper>
      <UsesPageTechWrapper ref={techRef}>
        {state.searched.length === 0 && <ItemText>I never used that!</ItemText>}
        {state.searched.map(({ name, icon, iconComponent: Icon }) => {
          return (
            <GlowEffect key={name} $transparency={20}>
              <FlareCard $intensity={15} $borderRadius={4} $disableTouch>
                <TechItem>
                  {Icon ? (
                    <Icon
                      width="clamp(1rem, 0.8vw, 1.6rem)"
                      height="clamp(1rem, 0.8vw, 1.6rem)"
                      fill={theme.palette.primary}
                    />
                  ) : (
                    icon?.({
                      width: 'clamp(1rem, 0.8vw, 1.6rem)',
                      height: 'clamp(1rem, 0.8vw, 1.6rem)',
                      fill: theme.palette.primary,
                    })
                  )}
                  {name === 'CSS' ? (
                    <ItemTextSecret>{name}</ItemTextSecret>
                  ) : (
                    <ItemText>{name}</ItemText>
                  )}
                </TechItem>
              </FlareCard>
            </GlowEffect>
          );
        })}
      </UsesPageTechWrapper>
    </UsesPageWrapper>
  );
};

export default UsesPage;
