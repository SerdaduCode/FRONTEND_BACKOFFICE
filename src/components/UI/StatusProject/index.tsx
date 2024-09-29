const StatusProject = ({ status }: { status?: string }) => {
  return (
    <>
      <span className="text-xs flex gap-1 text-slate-500 font-semibold items-center">
        <div
          className={`w-4 h-4 ${
            status
              ? status === 'Selesai'
                ? 'bg-green-400'
                : status === 'Gagal'
                ? 'bg-red-400'
                : status === 'Segera'
                ? 'bg-yellow-400'
                : 'Unknown'
              : 'Unknown'
          } rounded-full`}
        ></div>
        {status === 'Selesai'
          ? 'Selesai'
          : status === 'Gagal'
          ? 'Gagal'
          : status === 'Segera'
          ? 'Segera'
          : 'Unknown'}
      </span>
    </>
  );
};

export default StatusProject;
