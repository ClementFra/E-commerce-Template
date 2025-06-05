import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get('/api/forum', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Forum Interne</h1>
      {posts.map(p => <div key={p._id}>{p.title}</div>)}
    </div>
  );
}
export default Forum;