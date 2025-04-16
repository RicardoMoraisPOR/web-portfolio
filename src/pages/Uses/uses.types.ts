import { IconType } from '@icons-pack/react-simple-icons';
import { SVGProps } from 'react';
import { USES_LIST } from '@constants/uses';

export type Category =
  | 'all'
  | 'using'
  | 'not-using'
  | 'love'
  | 'hate'
  | 'lang'
  | 'framework'
  | 'cloud'
  | 'ui-ux'
  | 'env'
  | 'web-tool'
  | 'testing'
  | 'bundler';

export type TechItemProps = {
  name: string;
  category: Array<Exclude<Category, 'all'>>;
  iconComponent?: IconType;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export interface State {
  firstAnimation: boolean;
  animateSearch: boolean;
  searchValue: string;
  selectedValue: Category;
  searched: Array<TechItemProps>;
}

export type Action =
  | { type: 'SET_FIRST_ANIMATION'; payload: boolean }
  | { type: 'SET_ANIMATE_SEARCH'; payload: boolean }
  | { type: 'SET_SEARCH_VALUE'; payload: string }
  | { type: 'SET_SELECTED_VALUE'; payload: Category }
  | { type: 'SET_SEARCHED'; payload: Array<TechItemProps> };

export const techsList = () => {
  return USES_LIST.slice().sort((a, b) => a.name.localeCompare(b.name));
};
