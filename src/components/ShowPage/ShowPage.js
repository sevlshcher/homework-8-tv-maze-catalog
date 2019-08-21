import React, { PureComponent } from 'react'
import styles from './ShowPage.module.css'
import { connect } from 'react-redux'
import { showSoapRequest } from '../../actions'
import { getSoap, getIsLoading} from '../../reducers/showReducer'

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

class ShowPage extends PureComponent {
    componentDidMount() {
        const { showSoapRequest, match } = this.props
        const id = match.params.id
        showSoapRequest(id)
    }

    render() {
        const { soap, isLoading} = this.props

        if (isLoading) return <p>Данные загружаются...</p>
        return (
            <div>
                <p>{soap.name}</p>
                { soap.image && <img src={soap.image.medium} alt={soap.name} />}
                <div>
                <p dangerouslySetInnerHTML={{ __html: soap.summary }}></p>
                </div>
                <div className={styles.cast}>
                    { soap.cast && soap.cast.map(item => (
                        <div className='t-person' key={item.id}>
                            <p>{item.name}</p>
                            { item.image && <img src={item.image.medium} alt={item.name} />}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    soap: getSoap(state),
    isLoading: getIsLoading(state)
  });
  const mapDispatchToProps = { showSoapRequest };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ShowPage)