import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';
import { Post } from './Post';

import styles from './componentes/App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiz Fernando Petris"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam dolor suscipit facere nemo aliquam, cum, ullam esse provident ex ratione mollitia, impedit aperiam nam magni quod? Nemo, nulla a."
          />
          <Post
            author="Teste Autor"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam dolor suscipit facere nemo aliquam, cum, ullam esse provident ex ratione mollitia, impedit aperiam nam magni quod? Nemo, nulla a."
          />
        </main>
      </div>
    </div>
  )
}

