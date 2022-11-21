import { foot, hand, save, start, top, undo } from 'assets/svg';
import { ToolBar } from 'modules/components/toolBar/ToolBar';
import { ToolBarRow } from 'modules/components/toolBar/ToolBarRow';
import { ToolBtn } from 'modules/components/toolBar/ToolBtn';

export function EditToolbar({
  setHoldColor,
  holdColor,
  setHoldRadius,
  holdRadius,
  undoHold,
  setStep,
  holdsListLen,
}: {
  setHoldColor: Function;
  holdColor: string;
  setHoldRadius: Function;
  holdRadius: number;
  undoHold: Function;
  setStep: Function;
  holdsListLen: number;
}) {
  return (
    <ToolBar>
      <ToolBarRow>
        <ToolBtn
          onClickHandler={setHoldColor}
          value={'#9ADF00'}
          borderColor={holdColor === '#9ADF00' ? '#9ADF00' : ''}
          title={'start'}
          icon={start}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          value={'#009287'}
          borderColor={holdColor === '#009287' ? '#009287' : ''}
          title={'hand'}
          icon={hand}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          value={'#270722'}
          borderColor={holdColor === '#270722' ? '#270722' : ''}
          title={'foot'}
          icon={foot}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          value={'#EA000C'}
          borderColor={holdColor === '#EA000C' ? '#EA000C' : ''}
          title={'top'}
          icon={top}
        />
        <ToolBtn
          onClickHandler={setStep}
          value={0}
          disabled={holdsListLen < 3}
          borderColor={holdsListLen < 3 ? 'red' : ''}
          title={'save'}
          icon={save}
        />
      </ToolBarRow>
      <ToolBarRow>
        <ToolBtn
          onClickHandler={setHoldRadius}
          value={8}
          borderColor={holdRadius === 8 ? '#9ADF00' : ''}
          text={'S'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          value={10}
          borderColor={holdRadius === 10 ? '#9ADF00' : ''}
          text={'M'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          value={12}
          borderColor={holdRadius === 12 ? '#9ADF00' : ''}
          text={'L'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          value={14}
          borderColor={holdRadius === 14 ? '#9ADF00' : ''}
          text={'XL'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={undoHold}
          value={'test'}
          icon={undo}
          title={'undo'}
        />
      </ToolBarRow>
    </ToolBar>
  );
}
