import React, { useState } from 'react';
import MyErrorPage from '@/components/commons/MyErrorPage';
import SlotDetailPage from './SlotDetailPage';
import ActionBoardPage from './ActionBoardPage';
import { useInstrumentPageProvider } from '../../../../components/container';
import '../../../../index.css';

const SlotContentPage = () => {
  const { instrumentParm } = useInstrumentPageProvider();
  const [webContent, setWebContent] = useState<any>();
  const [slotErrPage, setSlotErrPage] = useState(false);
  return (
    <div className="content-root">
      {slotErrPage ? (
        <MyErrorPage />
      ) : (
        <>
          <ActionBoardPage
            webContent={webContent}
            instrumentParm={instrumentParm}
          />
          <SlotDetailPage
            webContent={webContent}
            setWebContent={setWebContent}
            setSlotErrPage={setSlotErrPage}
          />
        </>
      )}
    </div>
  );
};

export default SlotContentPage;
