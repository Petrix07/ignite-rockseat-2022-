import { Header } from '../componentes/Header';
import { Post } from './Post';

import './style.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Luiz Fernando Petris"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam dolor suscipit facere nemo aliquam, cum, ullam esse provident ex ratione mollitia, impedit aperiam nam magni quod? Nemo, nulla a."
      />
      <Post
        author="Teste Autor"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam dolor suscipit facere nemo aliquam, cum, ullam esse provident ex ratione mollitia, impedit aperiam nam magni quod? Nemo, nulla a."
      />
    </div>
  )
}

