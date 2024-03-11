const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full mt-20 border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue "
        role="status  "
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
