import { Editor } from '@nox-engine/nox-engine-editor-ui';
import { GearFill, PlusSquareFill } from 'react-bootstrap-icons';
import { useRecoilValue } from 'recoil';
import { StoreSelectorNoxProjects } from '../store/selector/nox/store.selector.nox.projects';
import React from 'react';

export function Index() {
  const projects = useRecoilValue(StoreSelectorNoxProjects);
  return (
    <Editor.Home v_bgc={'dark'}>
      <Editor.Grid
        css={{
          gridTemplateColumns: 'minmax(2rem, 1fr) minmax(auto, 64rem) minmax(2rem, 1fr)',
          gridTemplateRows: '2rem auto 2rem',
        }}>
        <Editor.GridItem colStart={2} rowStart={2}>
          <Editor.Grid css={{ gridTemplateColumns: '1fr auto' }}>
            <Editor.GridItem v_marginBottom={'m'} colStart={1} alignItems={'center'}>
              <Editor.Typography as={'h1'} v_marginBottom={'none'}>Projects</Editor.Typography>
            </Editor.GridItem>
            <Editor.GridItem v_marginBottom={'m'} justifyContent={'right'} alignItems={'center'} colStart={2}>
              <Editor.Grid css={{gridTemplateColumns: 'auto auto'}}>
                <Editor.Button v_bgc={'blue'} $icon={<PlusSquareFill />}>New project</Editor.Button>
                <Editor.Button v_bgc={'secondary'} $icon={<GearFill />}>Settings</Editor.Button>
              </Editor.Grid>
            </Editor.GridItem>
          </Editor.Grid>
          <Editor.Grid col={2}>
            {projects.map((v, i) => {
              return <Editor.ProjectCard directory={v.directory} description={v.description} name={v.name}
                                         modified={v.modified} key={i}></Editor.ProjectCard>;
            })}
          </Editor.Grid>
        </Editor.GridItem>
      </Editor.Grid>
    </Editor.Home>
  );
}

export default Index;
