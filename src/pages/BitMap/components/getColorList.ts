export const getColorList = (detailsEchartsBg) => {
  return {
    open: false,
    // colorList: [detailsEchartsBg, '#f00', '#fba', '#bfa'],
    colorList: [
      // { label: 'File2 & File1', color: '' },
      { label: 'Pass + Pass', color: detailsEchartsBg },
      { label: 'Pass + Fail', color: '#f00' },
      { label: 'Fail + Pass', color: '#fba' },
      { label: 'Fail + Fail', color: '#bfa' },
    ],
  };
};
