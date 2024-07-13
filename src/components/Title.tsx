import React from "react";

type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="flex flex-col justify-center my-[40px] sm:my-[60px] md:my-20 items-center">
      <div>
        <p className="font-bold text-[30px]">{title}</p>
      </div>
      <div>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Title;
