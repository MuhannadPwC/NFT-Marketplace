export const topCreators = [
  {
    avatar: "../../assets/userpfp.svg",
    name: "Mark Ruben",
    eth: "1,995",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Dick Grayson",
    eth: "2,450",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Donald Trump",
    eth: "2,324",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Mike Tyson",
    eth: "1,523",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Grandpa Joe",
    eth: "1,273",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Bilbo Baggins",
    eth: "2,341",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Hugh Janice",
    eth: "2,690",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Grant Musk",
    eth: "4,208",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Joe Biden",
    eth: "3,486",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Stephen Hawking",
    eth: "6,422",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Kevin Hart",
    eth: "2,972",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Dave Chappelle",
    eth: "2,864",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Bill Burr",
    eth: "1,230",
  },
  {
    avatar: "../../assets/userpfp.svg",
    name: "Robin Wonka",
    eth: "3,431",
  },
];

export const dummyNfts = [
  {
    creator: "Jared Lumpy",
    bid: "1.0003",
  },
  {
    creator: "Gordon Jumbus",
    bid: "2.1223",
  },
  {
    creator: "Jordan Compass",
    bid: "0.0872",
  },
  {
    creator: "Shin Malphur",
    bid: "0.0023",
  },
  {
    creator: "Dredgen Yor",
    bid: "1.0029",
  },
  {
    creator: "Zavala Reddick",
    bid: "1.0001",
  },
  {
    creator: "Lance Armstrong",
    bid: "1.0110",
  },
  {
    creator: "Ikora Rey",
    bid: "1.0101",
  },
];

export const collections = [
  {
    name: "Nft Art 3d",
    creator: "Tianna Moore",
  },
  {
    name: "Photography",
    creator: "Jenny John",
  },
  {
    name: "Digital Art",
    creator: "Jekson Villis",
  },
];

export const collectors = [
  {
    username: "Swagalirious",
    items: "6",
    price: "1.23455",
  },
  {
    username: "ChocolateThunder",
    items: "12",
    price: "2.23455",
  },
  {
    username: "DaSalamiLid",
    items: "19",
    price: "1.93645",
  },
];

export const recommended = [
  {
    creator: "Jared Lumpy",
    bid: "1.0003",
  },
  {
    creator: "Jared Lumpy",
    bid: "1.0003",
  },
  {
    creator: "Jared Lumpy",
    bid: "1.0003",
  },
  {
    creator: "Jared Lumpy",
    bid: "1.0003",
  },
];

export const activityNfts = [
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.058",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.116",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.234",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "1.231",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.053",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.053",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.053",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.053",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
  {
    from: "Gandalf the Great",
    to: "Ganondorf",
    price: "0.053",
    quantity: 1,
    datePosted: new Date(2023, 4, 3, 11, 30),
  },
];
export type ActivityCardProps = {
  nft: {
    from: string;
    to: string;
    price: string;
    quantity: number;
    datePosted: Date;
  };
};
