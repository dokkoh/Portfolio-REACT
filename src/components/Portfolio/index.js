function MonPortfolio(props) {

    const { lienCV } = props;

    const ouvrirPDF = () => {
        window.open(lienCV, '_blank');
    };

    return (
        <>
            <button role='button' type='button' className='btn' id='download' onClick={ouvrirPDF}>
                Télécharger mon CV
            </button>
        </>
    );
}

export default MonPortfolio;