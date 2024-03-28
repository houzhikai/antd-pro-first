import '../index.less';
const SvgFunction = (color?: string, className?: string) => {
  return (
    <svg
      width="10"
      height="10"
      fill="currentColor"
      viewBox="0 0 16 16"
      color={color}
      className={className}
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
};

export const matchIcon = (val?: string) => {
  let value;
  switch (val) {
    case '0':
      value = SvgFunction('#52c41a');
      break;
    case '1':
      value = SvgFunction('#52c41a', 'highlight');
      break;
    case '2':
      value = SvgFunction('rgb(250 173 20)');
      break;
    case '3':
      value = SvgFunction('rgb(250 173 20)', 'highlight');
      break;
    case '4':
      value = SvgFunction('red');
      break;
    case '5':
      value = SvgFunction('red', 'highlight');
      break;
    case '6':
      value = SvgFunction('grey');
      break;
    case '7':
      value = SvgFunction('red', 'highlight');
      break;
    case '8':
      value = SvgFunction('red');
      break;
    case '9':
      value = SvgFunction('#52c41a', 'highlight');
      break;
    default:
      value = (
        <svg width="10" height="10" opacity="0" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" />
        </svg>
      );
  }
  return value;
};
