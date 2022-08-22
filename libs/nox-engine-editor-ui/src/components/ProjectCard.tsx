import React, { useState } from 'react';
import { GearFill, ThreeDots, TrashFill } from 'react-bootstrap-icons';
import { Editor } from '..';
import { useSetRecoilState } from 'recoil';
import { Store } from '@nox-engine/nox-engine-editor-store';

export const ProjectCard: React.FC<{
  name?: string,
  description?: string,
  modified?: number,
  directory?: string[],
}> = ({ name, description, modified }) => {
  const [dropdown, setDropdown] = useState(false);
  const contextMenuItems = useSetRecoilState(Store.ContextMenuMenuItems);
  const contextMenuPosition = useSetRecoilState(Store.ContextMenuPosition);
  const contextMenuOpen = useSetRecoilState(Store.ContextMenuOpen);

  return (
    <Editor.Container v_padding={'none'}>
      <Editor.Card v_bgc={'light'} onContextMenu={(e) => {
        e.preventDefault();
        contextMenuPosition({ x: e.clientX, y: e.clientY });
        contextMenuOpen(true);
        contextMenuItems([{
          title: 'Settings',
          callback: () => {
            console.dir('Click settings');
          },
        }, {
          title: 'Remove',
          callback: () => {
            console.dir('Click remove');
          },
        }]);
      }
      }>
        <Editor.CardBody v_paddingBottom={'none'}>
          <Editor.Grid col={2} css={{ gridTemplateColumns: 'auto 1fr' }}>
            <Editor.GridItem alignItems={'center'}>
              <Editor.Badge v_bgc={'info'}>Modified {modified}</Editor.Badge>
            </Editor.GridItem>
            <Editor.GridItem alignItems={'center'} justifyContent={'right'} v_position={'relative'}>
              <Editor.Button $icon={<ThreeDots />} size={'small'} onClick={() => setDropdown(!dropdown)}
                             v_bgc={'transparent'} />
              <Editor.Dropdown v_bgc={'dark'} open={dropdown} onClose={() => setDropdown(false)}>
                <Editor.DropdownItem onClick={() => {
                }} icon={<GearFill />}>Settings</Editor.DropdownItem>
                <Editor.DropdownItem icon={<TrashFill />}>Remove project</Editor.DropdownItem>
              </Editor.Dropdown>
            </Editor.GridItem>
          </Editor.Grid>
        </Editor.CardBody>
        <Editor.CardBody v_paddingBottom={'none'}>
          <Editor.Typography as={'h4'}>{name}</Editor.Typography>
          <Editor.Typography as={'p'} v_fontSize={'xxs'}>{description}</Editor.Typography>
        </Editor.CardBody>
        <Editor.CardBody v_paddingTop={'none'}>
          <Editor.Button v_bgc={'success'} size={'small'}>Open</Editor.Button>
        </Editor.CardBody>
      </Editor.Card>
    </Editor.Container>);
};
