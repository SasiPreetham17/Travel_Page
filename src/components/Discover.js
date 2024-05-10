import "../style.css";
import image1 from "../asset/Images/image1.png";
import image2 from "../asset/Images/image2.png";
import image3 from "../asset/Images/image3.png";
import Footer from "./Footer";

const Discover = () => {
  const handleClick = () => {
    alert("Button Clicked!!");
  };
  return (
    <div className="discover-container">
      <div className="discover-layout">
        <div>
          <button className="explore-button" onClick={handleClick}>
            Explore The World!{" "}
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.7044 2.01898C8.034 2.01898 7.46373 2.4848 7.30365 3.11265H12.6863C12.5263 2.4848 11.956 2.01898 11.2856 2.01898H8.7044ZM14.2071 3.11264H16.1881C18.2891 3.11264 20 4.84428 20 6.97085C20 6.97085 19.94 7.8711 19.92 9.1248C19.918 9.224 19.8699 9.3212 19.7909 9.38C19.3097 9.7354 18.8694 10.0291 18.8294 10.0493C17.1686 11.1632 15.2386 11.947 13.1826 12.3369C13.0485 12.3632 12.9165 12.2934 12.8484 12.1739C12.2721 11.1754 11.1956 10.5253 9.995 10.5253C8.8024 10.5253 7.71586 11.1683 7.12256 12.1678C7.05353 12.2853 6.92346 12.3531 6.7904 12.3278C4.75138 11.9369 2.82141 11.1541 1.17059 10.0594L0.21011 9.3911C0.13007 9.3405 0.08004 9.2493 0.08004 9.1481C0.05003 8.6316 0 6.97085 0 6.97085C0 4.84428 1.71086 3.11264 3.81191 3.11264H5.78289C5.97299 1.6443 7.2036 0.5 8.7044 0.5H11.2856C12.7864 0.5 14.017 1.6443 14.2071 3.11264ZM19.6598 11.3152L19.6198 11.3355C17.5988 12.6924 15.1676 13.5937 12.6163 13.9684C12.2561 14.019 11.8959 13.7861 11.7959 13.4216C11.5758 12.5912 10.8654 12.0443 10.015 12.0443H10.005H9.985C9.1346 12.0443 8.4242 12.5912 8.2041 13.4216C8.1041 13.7861 7.74387 14.019 7.38369 13.9684C4.83242 13.5937 2.4012 12.6924 0.38019 11.3355C0.37019 11.3254 0.27014 11.2646 0.1901 11.3152C0.10005 11.3659 0.10005 11.4874 0.10005 11.4874L0.17009 16.6519C0.17009 18.7785 1.87094 20.5 3.97199 20.5H16.018C18.1191 20.5 19.8199 18.7785 19.8199 16.6519L19.9 11.4874C19.9 11.4874 19.9 11.3659 19.8099 11.3152C19.7599 11.2849 19.6999 11.295 19.6598 11.3152ZM10.7454 15.5583C10.7454 15.9836 10.4152 16.3177 9.995 16.3177C9.5848 16.3177 9.2446 15.9836 9.2446 15.5583V14.2519C9.2446 13.8367 9.5848 13.4924 9.995 13.4924C10.4152 13.4924 10.7454 13.8367 10.7454 14.2519V15.5583Z"
                fill="#F85E9F"
              />
            </svg>
          </button>
          <p className="travel-text">Travel top destination of the world</p>
          <p className="travel-description">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="buttons">
            <button className="get-started-button" onClick={handleClick}>
              Get Started
            </button>
            <button className="start-demo-button">
              {" "}
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClick}
              >
                <path
                  d="M10.9688 0.5C5.44875 0.5 0.96875 4.98 0.96875 10.5C0.96875 16.02 5.44875 20.5 10.9688 20.5C16.4888 20.5 20.9688 16.02 20.9688 10.5C20.9688 4.98 16.4988 0.5 10.9688 0.5ZM13.9688 12.73L11.0687 14.4C10.7087 14.61 10.3088 14.71 9.9187 14.71C9.5188 14.71 9.1287 14.61 8.76875 14.4C8.04875 13.98 7.61875 13.24 7.61875 12.4V9.05C7.61875 8.22 8.04875 7.47 8.76875 7.05C9.4888 6.63 10.3487 6.63 11.0787 7.05L13.9787 8.72C14.6987 9.14 15.1287 9.88 15.1287 10.72C15.1287 11.56 14.6987 12.31 13.9688 12.73Z"
                  fill="#5D50C6"
                />
              </svg>
              Start Demo
            </button>
          </div>
        </div>
        <div className="image-container">
          <div className="right-box">
            <div className="column">
              <div className="image-with-svg">
                <img src={image2} alt="Second Image" className="image" />
                <div className="svg-container">
                  <svg
                    width="126"
                    height="172"
                    viewBox="0 0 126 172"
                    onClick={handleClick}
                    className="svg-icon"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_ddd_832_866)">
                      <rect
                        x="31"
                        width="64"
                        height="64"
                        rx="32"
                        fill="#F85E9F"
                      />
                      <path
                        d="M75.5806 19.4426C74.9137 18.7581 73.9266 18.5031 73.0062 18.7715L51.5441 25.0127C50.573 25.2825 49.8847 26.0569 49.6993 27.0407C49.5099 28.042 50.1715 29.313 51.0359 29.8445L57.7466 33.9691C58.4349 34.3919 59.3233 34.2859 59.8928 33.7113L67.5773 25.9791C67.9641 25.5764 68.6043 25.5764 68.9913 25.9791C69.3781 26.3683 69.3781 26.9991 68.9913 27.4018L61.2934 35.1355C60.7225 35.7085 60.6158 36.6011 61.0359 37.2936L65.1363 44.0717C65.6165 44.8769 66.4435 45.3333 67.3505 45.3333C67.4573 45.3333 67.5773 45.3333 67.6841 45.3199C68.7245 45.1857 69.5514 44.4744 69.8582 43.4677L76.2209 22.033C76.501 21.1204 76.2475 20.1272 75.5806 19.4426Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_ddd_832_866"
                        x="0"
                        y="0"
                        width="126"
                        height="172"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="19" />
                        <feGaussianBlur stdDeviation="9.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_832_866"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="43" />
                        <feGaussianBlur stdDeviation="13" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_832_866"
                          result="effect2_dropShadow_832_866"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="77" />
                        <feGaussianBlur stdDeviation="15.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect2_dropShadow_832_866"
                          result="effect3_dropShadow_832_866"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect3_dropShadow_832_866"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <img src={image1} alt="First Image" className="image" />
            </div>
            <div className="column">
              <div className="image-with-svg">
                <img
                  src={image3}
                  alt="Third Image"
                  className="image centered-image"
                />
                <div className="svg-container-bottom-right">
                  <svg
                    width="228"
                    height="164"
                    viewBox="0 0 228 164"
                    onClick={handleClick} // Add your click handler function here
                    className="svg-icon"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_832_872)">
                      <rect
                        x="31"
                        width="166"
                        height="56"
                        rx="28"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M66.5 26.3178C66.5 21.7179 70.3439 18 74.9934 18C79.6561 18 83.5 21.7179 83.5 26.3178C83.5 28.6357 82.657 30.7876 81.2695 32.6116C79.7388 34.6235 77.8522 36.3765 75.7285 37.7524C75.2425 38.0704 74.8039 38.0944 74.2704 37.7524C72.1347 36.3765 70.2481 34.6235 68.7305 32.6116C67.342 30.7876 66.5 28.6357 66.5 26.3178ZM72.1942 26.5768C72.1942 28.1177 73.4517 29.3297 74.9934 29.3297C76.5362 29.3297 77.8058 28.1177 77.8058 26.5768C77.8058 25.0478 76.5362 23.7768 74.9934 23.7768C73.4517 23.7768 72.1942 25.0478 72.1942 26.5768Z"
                        fill="#FACD49"
                      />
                      <path
                        d="M98.458 32.5V24.128H95.07V22.63H103.638V24.128H100.25V32.5H98.458ZM106.634 32.64C105.924 32.64 105.308 32.4953 104.786 32.206C104.263 31.9167 103.857 31.506 103.568 30.974C103.278 30.4327 103.134 29.798 103.134 29.07C103.134 28.342 103.278 27.712 103.568 27.18C103.857 26.648 104.263 26.2373 104.786 25.948C105.308 25.6587 105.924 25.514 106.634 25.514C107.343 25.514 107.959 25.6587 108.482 25.948C109.004 26.2373 109.41 26.648 109.7 27.18C109.989 27.712 110.134 28.342 110.134 29.07C110.134 29.798 109.989 30.4327 109.7 30.974C109.41 31.506 109.004 31.9167 108.482 32.206C107.959 32.4953 107.343 32.64 106.634 32.64ZM106.634 31.31C107.156 31.31 107.576 31.1233 107.894 30.75C108.211 30.3673 108.37 29.8073 108.37 29.07C108.37 28.3233 108.211 27.768 107.894 27.404C107.576 27.0307 107.156 26.844 106.634 26.844C106.111 26.844 105.691 27.0307 105.374 27.404C105.056 27.768 104.898 28.3233 104.898 29.07C104.898 29.8073 105.056 30.3673 105.374 30.75C105.691 31.1233 106.111 31.31 106.634 31.31ZM111.578 35.02V25.654H113.286V26.746C113.482 26.3727 113.776 26.074 114.168 25.85C114.569 25.626 115.022 25.514 115.526 25.514C116.123 25.514 116.646 25.6587 117.094 25.948C117.551 26.2373 117.906 26.648 118.158 27.18C118.41 27.7027 118.536 28.3327 118.536 29.07C118.536 29.798 118.41 30.4327 118.158 30.974C117.906 31.506 117.556 31.9167 117.108 32.206C116.66 32.4953 116.133 32.64 115.526 32.64C115.041 32.64 114.602 32.5373 114.21 32.332C113.827 32.1173 113.533 31.8327 113.328 31.478V35.02H111.578ZM115.036 31.31C115.559 31.31 115.979 31.1233 116.296 30.75C116.613 30.3673 116.772 29.8073 116.772 29.07C116.772 28.3233 116.613 27.768 116.296 27.404C115.979 27.0307 115.559 26.844 115.036 26.844C114.513 26.844 114.093 27.0307 113.776 27.404C113.459 27.768 113.3 28.3233 113.3 29.07C113.3 29.8073 113.459 30.3673 113.776 30.75C114.093 31.1233 114.513 31.31 115.036 31.31ZM123.914 32.5V22.63H128.198C129.281 22.63 130.116 22.9007 130.704 23.442C131.292 23.9833 131.586 24.7393 131.586 25.71C131.586 26.6807 131.292 27.4413 130.704 27.992C130.116 28.5333 129.281 28.804 128.198 28.804H125.706V32.5H123.914ZM125.706 27.39H127.918C129.206 27.39 129.85 26.83 129.85 25.71C129.85 24.5993 129.206 24.044 127.918 24.044H125.706V27.39ZM135.259 32.64C134.447 32.64 133.845 32.4207 133.453 31.982C133.07 31.534 132.879 30.8807 132.879 30.022V22.63H134.629V29.938C134.629 30.778 134.983 31.198 135.693 31.198C135.795 31.198 135.898 31.1933 136.001 31.184C136.103 31.1747 136.201 31.156 136.295 31.128L136.267 32.514C135.931 32.598 135.595 32.64 135.259 32.64ZM139.603 32.64C139.109 32.64 138.665 32.5467 138.273 32.36C137.891 32.164 137.587 31.9027 137.363 31.576C137.149 31.2493 137.041 30.8807 137.041 30.47C137.041 29.966 137.172 29.5693 137.433 29.28C137.695 28.9813 138.119 28.7667 138.707 28.636C139.295 28.5053 140.084 28.44 141.073 28.44H141.563V28.146C141.563 27.6793 141.461 27.3433 141.255 27.138C141.05 26.9327 140.705 26.83 140.219 26.83C139.837 26.83 139.445 26.8907 139.043 27.012C138.642 27.124 138.236 27.3013 137.825 27.544L137.321 26.354C137.564 26.186 137.849 26.0413 138.175 25.92C138.511 25.7893 138.861 25.6913 139.225 25.626C139.599 25.5513 139.949 25.514 140.275 25.514C141.274 25.514 142.016 25.7473 142.501 26.214C142.987 26.6713 143.229 27.3853 143.229 28.356V32.5H141.591V31.408C141.433 31.7907 141.181 32.094 140.835 32.318C140.49 32.5327 140.079 32.64 139.603 32.64ZM139.967 31.436C140.425 31.436 140.803 31.2773 141.101 30.96C141.409 30.6427 141.563 30.2413 141.563 29.756V29.448H141.087C140.21 29.448 139.599 29.518 139.253 29.658C138.917 29.7887 138.749 30.0313 138.749 30.386C138.749 30.694 138.857 30.946 139.071 31.142C139.286 31.338 139.585 31.436 139.967 31.436ZM148.17 32.64C147.451 32.64 146.826 32.4953 146.294 32.206C145.762 31.9073 145.351 31.4873 145.062 30.946C144.772 30.4047 144.628 29.77 144.628 29.042C144.628 28.314 144.772 27.6887 145.062 27.166C145.351 26.634 145.762 26.228 146.294 25.948C146.826 25.6587 147.451 25.514 148.17 25.514C148.608 25.514 149.042 25.584 149.472 25.724C149.901 25.864 150.256 26.06 150.536 26.312L150.018 27.53C149.775 27.3153 149.5 27.152 149.192 27.04C148.893 26.928 148.604 26.872 148.324 26.872C147.717 26.872 147.246 27.0633 146.91 27.446C146.583 27.8193 146.42 28.356 146.42 29.056C146.42 29.7467 146.583 30.2927 146.91 30.694C147.246 31.086 147.717 31.282 148.324 31.282C148.594 31.282 148.884 31.226 149.192 31.114C149.5 31.002 149.775 30.834 150.018 30.61L150.536 31.842C150.256 32.0847 149.896 32.2807 149.458 32.43C149.028 32.57 148.599 32.64 148.17 32.64ZM154.847 32.64C154.072 32.64 153.405 32.4953 152.845 32.206C152.285 31.9167 151.851 31.506 151.543 30.974C151.244 30.442 151.095 29.812 151.095 29.084C151.095 28.3747 151.239 27.754 151.529 27.222C151.827 26.69 152.233 26.2747 152.747 25.976C153.269 25.668 153.862 25.514 154.525 25.514C155.495 25.514 156.261 25.822 156.821 26.438C157.39 27.054 157.675 27.894 157.675 28.958V29.476H152.775C152.905 30.6987 153.605 31.31 154.875 31.31C155.257 31.31 155.64 31.254 156.023 31.142C156.405 31.0207 156.755 30.834 157.073 30.582L157.562 31.758C157.236 32.0287 156.825 32.2433 156.331 32.402C155.836 32.5607 155.341 32.64 154.847 32.64ZM154.595 26.704C154.081 26.704 153.666 26.8627 153.349 27.18C153.031 27.4973 152.84 27.9267 152.775 28.468H156.219C156.181 27.8987 156.023 27.4647 155.743 27.166C155.472 26.858 155.089 26.704 154.595 26.704ZM161.566 32.64C160.988 32.64 160.446 32.57 159.942 32.43C159.438 32.29 159.018 32.0893 158.682 31.828L159.13 30.68C159.476 30.9133 159.863 31.0953 160.292 31.226C160.722 31.3473 161.151 31.408 161.58 31.408C162.028 31.408 162.36 31.3333 162.574 31.184C162.798 31.0253 162.91 30.82 162.91 30.568C162.91 30.176 162.621 29.924 162.042 29.812L160.642 29.546C159.457 29.322 158.864 28.706 158.864 27.698C158.864 27.25 158.986 26.8627 159.228 26.536C159.48 26.2093 159.826 25.9573 160.264 25.78C160.703 25.6027 161.207 25.514 161.776 25.514C162.262 25.514 162.728 25.584 163.176 25.724C163.624 25.8547 164.007 26.0553 164.324 26.326L163.848 27.474C163.578 27.25 163.251 27.0727 162.868 26.942C162.495 26.8113 162.136 26.746 161.79 26.746C161.333 26.746 160.992 26.8253 160.768 26.984C160.554 27.1427 160.446 27.3527 160.446 27.614C160.446 28.0247 160.712 28.2767 161.244 28.37L162.644 28.636C163.251 28.748 163.708 28.9533 164.016 29.252C164.334 29.5507 164.492 29.952 164.492 30.456C164.492 31.1373 164.226 31.674 163.694 32.066C163.162 32.4487 162.453 32.64 161.566 32.64Z"
                        fill="#393E46"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_832_872"
                        x="0"
                        y="0"
                        width="228"
                        height="164"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="43" />
                        <feGaussianBlur stdDeviation="13" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_832_872"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="77" />
                        <feGaussianBlur stdDeviation="15.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_832_872"
                          result="effect2_dropShadow_832_872"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_832_872"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="svg-container-bottom-right1">
                    <svg
                      width="126"
                      height="172"
                      viewBox="0 0 126 172"
                      onClick={handleClick}
                      className="svg-icon"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_ddd_832_869)">
                        <rect
                          x="31"
                          width="64"
                          height="64"
                          rx="32"
                          fill="#FF5722"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M59.6667 32.7383C63.3395 32.7383 66.2835 29.7561 66.2835 26.0358C66.2835 22.3155 63.3395 19.3333 59.6667 19.3333C55.994 19.3333 53.0499 22.3155 53.0499 26.0358C53.0499 29.7561 55.994 32.7383 59.6667 32.7383ZM59.6667 36.0203C54.2724 36.0203 49.6667 36.8828 49.6667 40.3285C49.6667 43.7731 54.2443 44.6667 59.6667 44.6667C65.0598 44.6667 69.6667 43.8041 69.6667 40.3583C69.6667 36.9125 65.0891 36.0203 59.6667 36.0203ZM73.5306 28.7838H75.1347C75.795 28.7838 76.3334 29.3297 76.3334 29.9993C76.3334 30.6688 75.795 31.2148 75.1347 31.2148H73.5306V32.7845C73.5306 33.4541 72.9937 34 72.3321 34C71.6718 34 71.1334 33.4541 71.1334 32.7845V31.2148H69.5321C68.8703 31.2148 68.3334 30.6688 68.3334 29.9993C68.3334 29.3297 68.8703 28.7838 69.5321 28.7838H71.1334V27.2155C71.1334 26.5459 71.6718 26 72.3321 26C72.9937 26 73.5306 26.5459 73.5306 27.2155V28.7838Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_ddd_832_869"
                          x="0"
                          y="0"
                          width="126"
                          height="172"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="19" />
                          <feGaussianBlur stdDeviation="9.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_832_869"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="43" />
                          <feGaussianBlur stdDeviation="13" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_832_869"
                            result="effect2_dropShadow_832_869"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="77" />
                          <feGaussianBlur stdDeviation="15.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect2_dropShadow_832_869"
                            result="effect3_dropShadow_832_869"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect3_dropShadow_832_869"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
