export const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const dateSubtraction = (today: Date, otherDate: Date) => {
  const diff = Math.abs(today.getTime() - otherDate.getTime());

  const mins = Math.floor(diff / 1000 / 60);

  if (mins === 0) {
    return "Less than a minute ago";
  }
  if (mins >= 60) {
    return `${Math.floor(mins / 60)} hour(s) ago`;
  }

  return `${mins} mins ago`;
};

export const thousandToK = (num: number) => {
  if (num >= 1000) {
    num = Math.floor(num / 100) / 10;
  }
  return num;
};
