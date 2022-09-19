import {
  faDiscord,
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faPinterest,
  faSnapchat,
  faSpotify,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFilm, faGamepad, faMusic, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IblockedApp {
  name: string;
  icon: IconDefinition;
}

export const blockedApps: IblockedApp[] = [
  {
    name: "Youtube",
    icon: faYoutube,
  },
  {
    name: "Twitter",
    icon: faTwitter,
  },
  {
    name: "Instagram",
    icon: faInstagram,
  },
  {
    name: "Twitch",
    icon: faTwitch,
  },
  {
    name: "Snapchat",
    icon: faSnapchat,
  },
  {
    name: "Games",
    icon: faGamepad,
  },
  {
    name: "Messenger",
    icon: faFacebookMessenger,
  },
  {
    name: "Facebook",
    icon: faFacebook,
  },
  {
    name: "Tiktok",
    icon: faTiktok,
  },
  {
    name: "Pinterest",
    icon: faPinterest,
  },
  {
    name: "Discord",
    icon: faDiscord,
  },
  {
    name: "Spotify",
    icon: faSpotify,
  },
  {
    name: "Music",
    icon: faMusic,
  },
  {
    name: "Netflix",
    icon: faFilm,
  },
];
