import Image from 'next/image';

const Avatar = ({ size }: { size: number }) => {
  return (
    <>
      <Image
        className="rounded-full"
        src="https://github.com/shadcn.png"
        alt=""
        width={size}
        height={size}
      />
    </>
  );
};

export default Avatar;
