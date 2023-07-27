const paths = {
  dog: {
    viewbox: "0 0 24 24",
    path: "M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.68 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.68 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6.05,6C6.59,6 7,6.06 7.37,6.11C5.27,8.42 4.44,12.04 4.15,13.87M9,12A1,1 0 0,1 8,11C8,10.46 8.45,10 9,10A1,1 0 0,1 10,11C10,11.56 9.55,12 9,12M15,12A1,1 0 0,1 14,11C14,10.46 14.45,10 15,10A1,1 0 0,1 16,11C16,11.56 15.55,12 15,12M19.85,13.87C19.56,12.04 18.73,8.42 16.63,6.11C17,6.06 17.41,6 17.95,6C18.8,6.4 20.75,10.73 21,13.5C20.75,13.61 20.36,13.75 19.85,13.87Z",
  },
  cat: {
    viewbox: "0 0 24 24",
    path: "M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z",
  },
  smallanimal: {
    viewbox: "0 0 24 24",
    path: "M16.84 14.5C16.58 14.33 16.22 13.89 16.05 13.68C17.24 12 19 8.87 19 5C19 3.05 18.26 2 17 2C15.46 2 13.04 4.06 12 7.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5C5 8.87 6.76 12 7.95 13.68C7.78 13.89 7.42 14.33 7.16 14.5C6.66 14.93 5.5 15.89 5.5 17.5C5.5 19.71 7.29 21.5 9.5 21.5C11.05 21.5 12 20.94 12 20.94S12.95 21.5 14.5 21.5C16.71 21.5 18.5 19.71 18.5 17.5C18.5 15.89 17.34 14.93 16.84 14.5M9.35 12.2C8.34 10.7 7 8.12 7 5C7 4.5 7.06 4.2 7.12 4.03C8.06 4.34 10.36 6.74 10.5 11.67C10.03 11.79 9.66 11.97 9.35 12.2M10.5 16.75C10.22 16.75 10 16.41 10 16S10.22 15.25 10.5 15.25 11 15.59 11 16 10.78 16.75 10.5 16.75M12 19.5C11.45 19.5 11 18.78 11 18.5S11.45 18 12 18 13 18.22 13 18.5 12.55 19.5 12 19.5M13.5 16.75C13.22 16.75 13 16.41 13 16S13.22 15.25 13.5 15.25 14 15.59 14 16 13.78 16.75 13.5 16.75M13.5 11.67C13.64 6.74 15.94 4.34 16.88 4.03C16.94 4.2 17 4.5 17 5C17 8.12 15.66 10.7 14.65 12.2C14.34 11.97 13.97 11.79 13.5 11.67Z",
  },
  homepage: {
    viewbox: "0 0 24 24",
    path: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
  },
  favorite: {
    viewbox: "0 0 24 24",
    path: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  },
};

export default function SvgIcon({
  variant = "dog",
  size = 80,
  color = "currentColor",
}) {
  return (
    <svg
      viewBox={paths[variant].viewbox}
      fill={color}
      width={size}
      height={size}
    >
      <title>{variant}</title>
      <path d={paths[variant].path} />
    </svg>
  );
}
