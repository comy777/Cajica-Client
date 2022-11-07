const ImageFooter = () => {
  return (
    <div className="imageFooterContainer relative">
      <div>
        <img
          src="https://cdn-3.expansion.mx/dims4/default/1769fae/2147483647/strip/true/crop/995x531+0+0/resize/1800x961!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F31%2F1b%2F37eb7a33461b9078de99206420d2%2Fmedio-ambiente.jpg"
          className="imgFooter"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 container-footer-image">
        <div className="grid justify-items-center">
          <div>
            <h2 className="md:text-3xl sm:text-xl font-bold text-white">
              Conoce mas acerca del reciclaje en Cajica
            </h2>
          </div>
          <div>
            <a href="https://cajica.gov.co/diadelreciclaje/" target="_blanck">
              <button className="btn-footer-img rounded-lg">Ir</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFooter;
