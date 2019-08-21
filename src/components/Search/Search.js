import React, { PureComponent } from 'react'
import styles from './Search.module.css'
import ShowPreview from '../ShowPreview'
import { connect } from 'react-redux'
import { searchSoapRequest } from '../../actions'
import { getSoap, getIsLoading, getError } from '../../reducers/searchReducer'

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

class Search extends PureComponent {
    state = { searchSoap:'' }

    handleChange = e => {
        this.setState({ searchSoap: e.target.value })
    }
    
    handleSearch = () => {
        const { searchSoap } = this.state
        const { searchSoapRequest } = this.props
        if(searchSoap) searchSoapRequest(searchSoap)
    }
    render() {
        const { searchSoap } = this.state
        const { soap, isLoading, error } = this.props

        if (isLoading) return <p>Данные загружаются...</p>
        if (error) return <p>Произошла сетевая ошибка</p>
        return (
            <>
                <div className={styles.previewList}>
                    <input
                        className={`${styles.input} t-input`}
                        placeholder='Название сериала'
                        value={searchSoap}
                        onChange={this.handleChange}
                    />
                    <div className={styles.buttonWrapper}>
                        <button
                            className={`${styles.button} t-search-button`}
                            onClick={this.handleSearch}
                        >Найти</button>
                    </div>
                </div>
                <div className={`t-search-result ${styles.searchPanel}`}>
                    { soap && soap.map(item =>
                        <ShowPreview {...item} key={item.id}/>
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    soap: getSoap(state),
    isLoading: getIsLoading(state),
    error: getError(state),
  });
  const mapDispatchToProps = { searchSoapRequest };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search);