import { ScreenComponent } from '@typings/index';
import {
  Introduction,
  VideoType,
  FarmerName,
  InfoCompany,
  InfoService,
  InfoPersonal,
  VideoDone,
  InfoExperience,
  LoadingVideo,
} from '@components/Steps';

export const items: ScreenComponent[] = [
  {
    img: '/img/background-main.png',
    Component: Introduction,
    isCover: true,
  },
  {
    img: '/img/background-main-2.png',
    Component: VideoType,
    isCover: true,
  },
  {
    img: '/img/background-main-3.png',
    Component: FarmerName,
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoCompany,
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoService,
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoExperience,
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoPersonal,
  },
  {
    img: '/img/background-main-3.png',
    Component: LoadingVideo,
  },
  {
    img: '/img/background-main-3.png',
    Component: VideoDone,
  },
];
