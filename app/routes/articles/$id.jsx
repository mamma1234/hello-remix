import { useParams } from '@remix-run/react';
import { Link, Outlet } from '@remix-run/react';

export default function Article() {
  const params = useParams();
        return <div>
        <div>게시글 ID: {params.id}</div>
      <Outlet />
      <hr />
      <ul>
        <li>
          <Link to="/articles/1/actors">Actors 1</Link>
        </li>
        <li>
          <Link to="/articles/2/actors">Actors 2</Link>
        </li>
        <li>
          <Link to="/articles/3/actors">Actors 3</Link>
        </li>
      </ul>
    </div>
}