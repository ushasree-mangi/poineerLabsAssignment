import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact'
  
  import {RxHamburgerMenu} from 'react-icons/rx'
  import {BsThreeDotsVertical} from 'react-icons/bs'
  
  const Sidebar = () => (
    <div className="sidebar-container">
      <div style={{display: 'flex', height: '100%', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#fff" backgroundColor="#023020">
          <CDBSidebarHeader prefix={<RxHamburgerMenu />}>
            <a
              href="/"
              className="text-decoration-none"
              style={{color: '#b8f947'}}
            >
              Carbon Cell
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <a href='#home' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </a>
              <a href='#about' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="info">About</CDBSidebarMenuItem>
              </a>
              <a href='#contact' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="phone">Contact Us</CDBSidebarMenuItem>
              </a>
  
        
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              <div
                style={{
                 
                  height: '80px',
                  width: '250px',
                  borderRadius: '10px',   
                  marginBottom: '15px'
                              
                }}
              >
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <img
                    src="https://res.cloudinary.com/diqte7t0g/image/upload/v1712830526/cvgqwdytks2ad62dfmcf.png"
                    alt="profile"
                    style={{
                      marginTop: '15px',
                      marginLeft: '20px',
                      height: '40px',
                      width: '40px',
                    }}
                  />
  
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1
                      style={{
                        fontSize: '15px',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      Usha Sree
                    </h1>
                    <p
                      style={{
                        fontSize: '10px',
                        marginLeft: '20px',
                      }}
                    >
                      ushamangi@gmail.com
                    </p>
                  </div>
                  <BsThreeDotsVertical
                    style={{marginTop: '20px', marginLeft: '40px'}}
                  />
                </div>
              </div>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  )
  
  export default Sidebar