import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './ShowPreview.module.css'

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

export default class ShowPreview extends PureComponent {
    render() {
        const { image, name, id, summary } = this.props

        return (
            <div className={`${styles.container} t-preview`}>
                <div>
                    <Link to={`/shows/${id}`} className='t-link'>{name}</Link>
                    { image && <img src={image} alt={name} />}
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                </div>
            </div>
        )
    }
}