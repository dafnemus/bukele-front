import { IComponentIconProps } from './types';

export const Facebook = ({ className }: IComponentIconProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 15C30 6.71371 23.2863 0 15 0C6.71371 0 0 6.71371 0 15C0 22.4867 5.48528 28.6923 12.6562 29.8186V19.3361H8.84577V15H12.6562V11.6952C12.6562 7.93609 14.8942 5.85968 18.3218 5.85968C19.9633 5.85968 21.6798 6.15242 21.6798 6.15242V9.84194H19.7879C17.925 9.84194 17.3438 10.9984 17.3438 12.1845V15H21.5038L20.8385 19.3361H17.3438V29.8186C24.5147 28.6923 30 22.4867 30 15Z"
        fill="white"
      />
    </svg>
  );
};
