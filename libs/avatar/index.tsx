type Props = {};

const Avatar = (props: Props) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
      <svg
        className="absolute -left-1 h-12 w-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Avatar;
