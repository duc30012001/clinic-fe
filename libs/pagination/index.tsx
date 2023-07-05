import clsx from "clsx";
import RcPagination, { PaginationProps } from "rc-pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Props extends PaginationProps {
  wrapperClassName?: string;
  placement?: "center" | "left" | "right";
}

const Pagination = ({
  wrapperClassName,
  placement = "right",
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        {
          "text-right": placement === "right",
          "text-left": placement === "left",
          "text-center": placement === "center",
        },
        wrapperClassName
      )}
    >
      <RcPagination
        prevIcon={<BiChevronLeft />}
        nextIcon={<BiChevronRight />}
        {...props}
      />
    </div>
  );
};

export default Pagination;
