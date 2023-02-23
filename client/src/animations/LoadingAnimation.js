import ScaleLoader from 'react-spinners/ScaleLoader'

import './loadingAnimation.scss'

function LoadingAnimation(props) {
    if (!props.data) {
        return (
            <div className='preLoader'>
                <ScaleLoader
                    color="#F4E2C0"
                    height={15}
                    radius={6}
                    width={4}
                    speedMultiplier={0.8}
                />
            </div>
        )
    } else {
        return (
            <div className="logoAnimation">
                <h1 className='animationText'>Arturs Silins</h1>
                <h1 className='animationLogo'>AS</h1>
                <h1 className='animationSlash'>/</h1>
            </div>
        )
    }
};

export default LoadingAnimation;