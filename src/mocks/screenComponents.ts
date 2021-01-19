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
    hasCard: true,
    cardImg: 'img/preview-name.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoCompany,
    hasCard: true,
    cardImg: 'img/preview-corn.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoService,
    hasCard: true,
    cardImg: 'img/preview-service.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoExperience,
    hasCard: true,
    cardImg: 'img/preview-experience.png',
  },
  {
    img: '/img/background-main.png',
    Component: InfoPersonal,
    isCover: true,
  },
  {
    img: '/img/background-main-3.png',
    Component: LoadingVideo,
  },
  {
    img: '/img/background-main-3.png',
    Component: VideoDone,
    cardImg: 'img/preview-name.png',
  },
];
