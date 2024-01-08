function Footer() {
    // gotta include because of 'attribution required' for free tier of BSC Scan API
    return(
        <footer id="footer" className="bg-light text-center text-lg-start">
            
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()}   "Powered by BscScan APIs"
            </div>
        </footer>
    
    
    )


}; 
export default Footer; 