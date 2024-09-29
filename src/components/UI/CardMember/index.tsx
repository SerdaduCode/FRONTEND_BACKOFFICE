type CardMemberProps = {
  total?: number;
  role?: string;
};

const CardMember = () => {
  return (
    <>
      <div className="mb-8">
        <span className="text-4xl font-bold mr-3">24</span>
        <span className="text-slate-500">Peoples</span>
      </div>
      <p className="text-slate-500">Front-End Developer</p>
    </>
  );
};

export default CardMember;
