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
                <span className='animationText'>Arturs Silins</span>
                <span className='animationLogo'>AS</span>
                <span className='animationSlash'>/</span>
            </div>
        )
    }
};

export default LoadingAnimation;