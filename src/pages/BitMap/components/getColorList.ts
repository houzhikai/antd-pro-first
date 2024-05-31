export const getColorList = (detailsEchartsBg) => {
  return {
    open: false,
    colorList: [
      { label: 'Pass + Pass', color: detailsEchartsBg },
      { label: 'Pass + Fail', color: '#f00' },
      { label: 'Fail + Pass', color: '#fba' },
      { label: 'Fail + Fail', color: '#bfa' },
    ],
  };
};
