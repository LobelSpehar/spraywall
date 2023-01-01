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
          current={holdColor}
          value={'#9ADF00'}
          title={'start'}
          icon={start}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          current={holdColor}
          value={'#009287'}
          title={'hand'}
          icon={hand}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          current={holdColor}
          value={'#270722'}
          title={'foot'}
          icon={foot}
        />
        <ToolBtn
          onClickHandler={setHoldColor}
          current={holdColor}
          value={'#EA000C'}
          title={'top'}
          icon={top}
        />
        <ToolBtn
          onClickHandler={setStep}
          value={0}
          disabled={holdsListLen < 3}
          title={'save'}
          icon={save}
        />
      </ToolBarRow>
      <ToolBarRow>
        <ToolBtn
          onClickHandler={setHoldRadius}
          current={holdRadius}
          value={8}
          text={'S'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          current={holdRadius}
          value={10}
          text={'M'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          current={holdRadius}
          value={12}
          text={'L'}
          title={'undo'}
        />
        <ToolBtn
          onClickHandler={setHoldRadius}
          current={holdRadius}
          value={14}
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
