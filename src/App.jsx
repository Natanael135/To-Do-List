import Header from './components/Header';
import Footer from './components/Footer';
import ToDoList from './Pages/ToDoList';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #fef6e4;
`;

const App = () => {
  return (
    <Layout>
      <Header />
      <MainContent>
        <ToDoList />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default App;
