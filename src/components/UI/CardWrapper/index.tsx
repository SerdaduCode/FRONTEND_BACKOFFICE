const CardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    // <div className="bg-white pt-5 pl-8 pr-5 pb-8 rounded-xl w-full">
    //   {children}
    // </div>
    <div className="bg-white p-6 rounded-xl w-full lg:mb-0 mb-4">
      {children}
    </div>
  );
};

export default CardWrapper;
