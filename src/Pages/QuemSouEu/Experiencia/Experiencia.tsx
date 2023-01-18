// React 
import * as React from 'react';

// MUI
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

// CSS 
import './Experiencia.css';


const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const black = {
    900: '#040f0f'
}

const green = {
    800: '#2ba84a'
}

const Tab = styled(TabUnstyled)`
  font-family: 'League Spartan', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: transparent;
  width: 15vw;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  &:hover {
    color: ${green[800]};
  }

  &:focus {
    color: ${green[800]};
    outline: 3px solid ${black[900]};
  }

  &.${tabUnstyledClasses.selected} {
    color: ${green[800]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  height: 10rem;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.4rem;
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${black[900]};
  border-radius: .2px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

export default function UnstyledTabsCustomized() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Yes! Idiomas</Tab>
        <Tab>bezt.</Tab>
        <Tab>Projeto Visão!</Tab>
        <Tab>Marechal Lott</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div className="experiencias-campo-texto">
            <h1 className="experiencias-titulo">Yes! Idiomas</h1>
            <h2 className="experiencias-subtitulo">(2016 - 2019)</h2>
        </div>
            <p className="experiencias-texto">
                Responsável pela operação administrativa, gerenciando recursos financeiros, materiais e humanos da empresa.
                onde tive meu primeiro contato sobre como otimizar os processos da equipe, delegando tarefas, auxiliando os colaboradores comerciais e organizando os objetivos e metas da empresa.
            </p>
      </TabPanel>
      <TabPanel value={1}>
        <div className="experiencias-campo-texto">
            <h1 className="experiencias-titulo">bezt.</h1>
            <h2 className="experiencias-subtitulo">(2020 - 2021)</h2>
        </div>
            <p className="experiencias-texto">
                 Responsável pela operação comercial e tive o primeiro contato com a área de Social Media e Designer, responsável por criar conteúdos digitais e a empresa tinha as redes sociais e website como seu principal canal de venda.
            </p>
      </TabPanel>
      <TabPanel value={2}>
        <div className="experiencias-campo-texto">
            <h1 className="experiencias-titulo">Projeto Visão!</h1>
            <h2 className="experiencias-subtitulo">(2021 - 2022)</h2>
        </div>
            <p className="experiencias-texto">
                Trabalhei como gestor da empresa, responsável pela operação, gerenciando recursos financeiros e até o treinamento da equipe de vendas.
            </p>
      </TabPanel>
      <TabPanel value={3}>
        <div className="experiencias-campo-texto">
            <h1 className="experiencias-titulo">Marechal Lott</h1>
            <h2 className="experiencias-subtitulo">(2022 - 2023)</h2>
        </div>
        <p className="experiencias-texto">
            Social Media responsável pela identidade e comunicação visual da empresa.
        </p>
      </TabPanel>
    </TabsUnstyled>
  );
}