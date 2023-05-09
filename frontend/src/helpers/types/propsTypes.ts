export type StatisticsProps = {
  views: number;
  likes: number;
};
export type ActivityCardProps = {
  nft: {
    from: string;
    to: string;
    price: string;
    quantity: number;
    datePosted: Date;
  };
};
export type BlogCardProps = {
  blog: {
    title: string;
    creator: string;
    body: string;
  };
};
export type AuthFormProps = {
  isSignup: boolean;
};
export type WalletCardProps = {
  name: string;
};
