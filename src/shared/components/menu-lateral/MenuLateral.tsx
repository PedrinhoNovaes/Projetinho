import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IMenuLateralProps{
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return(
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height= "100%" display= "flex" flexDirection= "column">
          <Box width= "100%" height={theme.spacing(20)} display="flex" alignItems= "center" justifyContent= "center">
            <Avatar
              sx={{height: theme.spacing(12), width: theme.spacing(12)}} 
              src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=1380&t=st=1660863191~exp=1660863791~hmac=91a4867976cfc4ba6ba90143e159a9cd0f054fc612c417cd7759c423374d8031" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component= "nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary= "Página Inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>
      
      <Box height= "100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};