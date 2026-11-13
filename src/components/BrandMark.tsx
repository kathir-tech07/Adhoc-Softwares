interface BrandMarkProps {
  className?: string;
  light?: boolean;
}

export default function BrandMark({ className = 'w-8 h-8', light = false }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="36"
        height="36"
        rx="8"
        fill={light ? '#102A4C' : '#081426'}
      />
      <path
        d="M18 7L28 26H22.8L18 16.4L13.2 26H8L18 7Z"
        fill="#FFFFFF"
      />
      <path
        d="M14.5 21.5H21.5L23.2 25H12.8L14.5 21.5Z"
        fill="#21C8E5"
      />
      <circle cx="18" cy="11.5" r="2" fill="#3478F6" />
    </svg>
  );
}
