import React from 'react'
import './BlogPreview.css'
import {Link} from 'react-router-dom'

function BlogPreview() {
  return (
    <div className='blog-preview'>
      <div className='title'>
          <h1 className='blog-heading'>Blog</h1>
      </div>
      <div className='blog-text'>
          <p className='text'>Nella sezione del mio blog, condividerò con te le mie passioni, che vanno ben oltre il mondo dell'informatica. Qui potrai trovare una raccolta di consigli che spaziano dai libri che mi hanno ispirato, ai casi studio avvincenti, alle app utili per semplificare la vita di tutti i giorni, e tanto altro ancora.</p>
        
      </div>
      <div className='project-heading'>
        <Link to='/blog'className='btn'>Blog</Link>
      </div>
    </div>
  )
}

export default BlogPreview