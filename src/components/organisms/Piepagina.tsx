import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
// import Link from '@mui/joy/Link';
;


import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import './organisms.css'


export default function Piepagina() {
    return (
<div  className="Seccionf contenedor-flex " >
    <div className="contenedor-flexV " >
    <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: '0',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: '700',
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            RVillalta
    </Typography>
    <br />
     <Box
        component="img"
        sx={{ height: 50, width: 150,}}
        alt="Proyecto ejemplo"
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACJCAMAAAACLZNoAAAAilBMVEX///8zMzMvLy8sLCwhISEmJiY0NDQpKSkbGxv4+PgiIiL6+vonJyceHh719fVCQkJjY2NqamrT09PQ0NDo6Og5OTlAQEBvb293d3fDw8NHR0cYGBihoaFUVFTv7++Li4u+vr6ysrLh4eF/f3+qqqqVlZWMjIxPT08QEBBbW1vb29t7e3ubm5sAAADZuedNAAAQqElEQVR4nO1d65qjqhJtUTTRaG5qormpMdfu/f6vdwRMYgLKRTPnD2vv+aanv5iSRVFUFQX8/GhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGj8O4T3Zb49HY6HU5kt7+E/k7u/L7Py73A8nrZ5sgi9fyU3KJZJvq3knpHcIvhXchG8ZTmf2o5lQcd0HAdalmNPV+Xy642/579p5Fi+O6nETiq5EMSzv2T/bblFdthFJrRc6KD2upYLot05+zdaFuTzSrIJjHcA07XgPP9ixydHwJILoOvuyi+2fXGKK436lGuAiWWlf4vvycXwktXGNQ3D/hSPYBumtVklX9Hz+wH6DksoaTy83r7T1+FfvJlQZDfkTrdfHF9BmY7M1lYTmKO0HLrpXnbbtLNdt92yT4Or+WLtw1a2H5y7v/eh5RIEZWSBFuV+ewU/Hpby7DLitLpuunMelPLFnKteGI6/+gbl2dQVkY6b7qbZYHIXN0uEbgxobAczaOHaFaIbwYTHoUdXMRNvNqLcmg3zBuOjJdxsBDddDiL3Z+vwjNgbJkY5jNyH+I1UsyuY1yHeYOlMuCbsHWBzHEBucbEk2wv823BKvp+PJMUjjOa95+/zRkEunPa2qLm4NXnBtJK+cmssYqnR9YTTs+X7maya1S13sl5yvYOKflUYnXrJfSCjnX5BALNPy+9TtX6u4P/1kBso9jOSuxrAPSt9VfHoDdQN+UK5n5FcdUO+V+/nypzdejO+VTGjL2y2inKXisO6hrVWlBtGCub7BWfak/GefCszvuwzrirYrhrjPfmuJpB+jOf99AzBzxXk3nsM6xrWQUFucOnJd6Xjtx6xVwJ7t7uKReRDkTDqYb8f8OXHljeb9JcLVa1Z5f4bA7TbAEA2IvB2vfUMwZf2i4/C2YtOucreYf/xhWFe/i/tNoAj2dN53wmrxkgxAjpCdlgNgMkGaBkQUM6cZgO1W7anw6HkGlApxk6uzEa4ZrybMzHbxSY7Jt7IdPm+p4PSgCs1uC9DGFAM8ybJNYLH/CZ4y4uOh4ryBhmUg1jCV5o7kvmqDvgSyYWtKyb3Nb7bPzNScM0OjAnbn/E9juWMoaHwLCw3Uw6sGZBQtUJIv00/nq2PvwjHeQfjQNqo0J6wLRqolwxb6HSNiyaCdLCBjWAJq9paxPXfrJevsbroCFIc6dzCipa/eS1RhwsaL5dgSTPurATllkMqeKVpqaAxWwjMHMB5G+Cd2QcomSllyLfqrwjKneVbFFzf2pVj8pE7zdpI7AX2EmQKwRJMn80EXGDwPkw7CXckw58VJf8RRmxHrYttwB3Va4oZ1V+mmIpv5VxwMLF8nzVNvz4hNl8zBiWFzwWG7vyazHxdqSj1XRPiS4e3jqFXTdyPhaYjtTS2EbHiXsRvd0OedTtny2S7MuoUBMsMi+VyuibAh7T5xzPdhMtZ8QP16hGedouuxR+4Psx9J8bE7ikXyxGJfuiRgb+YPaRePlN48tH4sg4n+vXATkBuyIw53mFlHw9xMsgTCUdlTLmEEK+hBGmHIphoxOWWSaapE5X3sgSyaDsWtbDcmQwX+dpc1lk61902ZMYuG4FyNPptaUSfiQIO4a7E4gvDBGO9/f3sCBQE1G2ckKhubZJsWUHpmp9x5YZXVuwx+QliuqNH78nAEOnTluXiiAytTubqpjZGyj5B2Hb3EpBILNw+2wdwALF8H3gONC7z9fxiQNQPFhnfJTSuWKUoZTNnXLnMJiBjuL989h/LC0j+gzGjx3yu3KWAL9p4/eI/v3LTfN6ouIrGHj9jyqIR9X1znWB8XhAj4S3OMTRcMjlVVpS82plScZdr1FhBjw2RKgfzD05MujV5fFhsGXmBETc8pqcsGo05k6PaD0yEl7Lp6NrNql/vGwPeNLdNdyvYms4F/SJEH8HMMr6El8IqmA159KTf7A3nl3o6qGxswlLVCTeFNRWIbuUJF7cpR1o5l+8UTnafM0hx8W/ZPcevjh1WelWS6yhlTCf8Mfks08Y3NlwGb+zV8VbLChVIOXLvIus88oQbG1E/ZUo9ChHhr6kczp8ex+uHuW+5JCZykErRmQZuj9MdjYU9RqZXOs+Y6xU5j70gGBPG2/JevIUIfr7MdBzrZcO3G7QRwuG67qKlWCHdbkz4kw+nlh2eUmAa6aMu+2nizTWTcMPgNPzS+GjDer0yfuPSHpGXeEXZXuB5wRj1+7bNTeM1nN3RzZc5ng+Hl1eUHDCOPMahYDqeYQgx4b/1ewFSCbD/veKIBMDrEf8iiGv9w2E8Haw+HJk2hC3vfW320/IYO9bEdF8aHqD/EOGt6RDIWU5mev9N2EzbcOelAwT8MoySNqWY8HXdIIgVpohflgxGWOGS+sE2wjmhwOIlN7o0nI3PNEyRnda3ZzQzHgc14a3hORWUv2Mfc4gzbObQTLgJxojLNQZjhDUJJ68f2s3mmcRa1DrWRjhn1sz8B8tgOm0kVcxNxn7AQzx73nhMbHirhnMmDzpG+wSb8Jw7dwrWKzBevEk4UfCPSgYHx2G1MWojnKNpz8k/ijDhUYR/do7xfxmZnD3Pw3/qn5H5rv6F6EZ/70gnRVTww8kYdi0kELAJ5zsrE7FNboyERJNwPE6okiwSuJMn2wgH3Qtej5GVRikifBqndvVzHCU/y/KOtRlZ64DMkNiSeOifP9X/aNoMq+cqqtM4Sikb0alp7IwZn3A6tPsEZ9Kq8Zz72ISb2C5QoQIZtoSzVsK7l1/qHHxqV3xPozhOY1D9nJpb4voFmGTCccUw4jsInoQH43vVQakxjdKL8RmxOp25ab6msglf8/3CTITwPSMn3SAcf0lIKwVetczdTsLjzkigNmVpahgV4WlUdWqaVj/ckNHwsD6jP5WeI8LHxIZXpgRxXml9FoE0BVVnxelnC9xOws/cuIdN+Iwbn4olDENG/qdJODLhjFAB/55M3K2ER52E38CD8GrStCtjYtjTtPrXZuFVFFf2ekz+EMKD2gUPHoQfYkJ4SlsUv9OW8jMpbLeQv9zN80drwllPNghHL5/TniNeHycp4jbCWzTlgdodRiY8TpH1fpjzWaXUXpNwpOsBMukPk4LMy26KCJ+ipw07flNyv9OWcuMew16EYfgiPSTgJ2CgUPqKQ7jfSXinhnMIrzW80m007aVxRXhlWKLoYv39BMSc1IQjR5DMnMgDJ4QXNiKcPI3cnDfCOzWcT7hh27bximIiGyEC3MIhQcI5NhybDoZJwfmtAUyKYcTIKbSxYbCr+TM2rO2Ph+z4GKVOfvD0SXxD/Hf1p7I554qTaYyfrjQ8etfwniYFN+pFOCkq5vMtaFI4kyZEmsyo/zOR9pbdk+ZUZNJkYbTihRBBV2k1Z9KUJlwUYpNmwMgON91CHGh/ph9s8j6r10dYhF/GXYLp0ownonh07A4iSr9D4brdwlIo26pCuJhbyMrlNAMfG41mqrQWF8h6RFcUA5/2oQ12+7A7t+x1ju/uuYMf+OBGqRAutvmDkQR6C+0z/KH3wpMJ1vt6BaE1tO8uBuoIQPCKUxdOXQVEvND+a4R3j6wnGJrWINwmy9dB2vyUk2JjsesO7TnJq47sG2e6/Sk6OTO7S1P4ySv8JQqECyavGD7fW3qWLDLudy9Pxd9hFcrr37Tmw7uLoO4dWsrZG9a9KYhTScpPz+JGyRMOYiG+WUUDb4Q/llu2hu8AYDqWQbyf4rni00Z497xHV2s14KQdRQfn7mkPcpyFm8AasgrhnOzoq+EtNvwZIJgpGeBBdrxdbseMWMj9syzLREvqDMK75y7OygvwT0WLluecNUnexkUhR1yBcDE3/IeVn8WEvyY180Kb1PBVq4MDLIVFZE7DJ+7tl6XmGe9cKpOzei606UKBcOHzPOiGYx1pTGpm9Kk0SWPPtNtSJsHbd8Iuk3gCbG6sWZ+78MLt6IKbZzWUCPc7w44meRRX2IMfNwqBgPvbtA/Fr9vQsgmyMfQ453qljHKBGrYBnOuOqTBbn2eB+RkNkf1r8oRzwo4mqFI3opxvGXfHn+eE8zCfv50pSMr+6GECueWzTCPuuJZl+ZcT06cN1nxzwC+f/ROINeUJ583VDVBBNhmVxbtZNuHGTS9T6+q+VxOTIkYqQWDyN2Gwguy0TLJk0RK5ZLbIfMeVu5Ar5hQQibAR3wid0BsgsH6dKFsD6N3HFi5/ocvHBDZE7xl18SDatpnCxUzksAuRchyB4kJpwqV2x1JPkx0n3oyvUJDIoZPMQEAus7TEtc8Mc7JPZr7QWQAie10EqgWlCZc6t4TeEUDKg/c73ptBEnTSE79Q3VfCLGYCDtz9LRu+nVdk61iMbrHypz1/T5W8SZE5qSakjFodHgfrzlcDmzURQ2/zHAlZtLZ1QgBdI12dt2VZno63yLSoY5bbIHa0wy+392QJl9h8jUBbhFE95yYx42xnDOD408feQvlaZYK8NQtloxpWCF04EeYav9RF6ICegqvisoRLnh1yp03Hs+AsOVzIqt47osvh4WgzDuCAYvsvxsPu/BbaWYTB3fktSfhE9gSoI12ssXnNAkFI42WyGCdlCR+Z0q7iSjB3gidQFbwduZKESx+DxCoC8A8i80DAPNhSVL7HrR2WgvjxpAeOOyBHuCt/VCXr+BA4zXkKM85jRiGTJX7gl8iOMmEIn6mA1s45PR3tHhAQHCkc7cYKBgC0z0m7mu+Tg+0yHpM6C+k4xFFyNSyJgc01ZuABvtyryqlXBXs7tONf3WjKQgSvFmvqseU2+nuDnCWHIXcwz7z/YYk1FE/So327BwAbbR+XPEFQ5GQHsXaLGxSEQMrf7ACIRfOyH5gPcGxiBUdwpemJv2E8FamTthDoFJIaoOplM/vpEAcXKpzGuhrEjMu3u3UfnBR6HCl9F5kgOACMTdo8DHAEbGXAM/kG/w5wRKUlF9O/YwAfTemg/gEOnx2pHOvszXqPLcVjnR8QKwPrgOLFCKHdk3HF6wG8W09XBQruzWxFz2MEBcsZaRRGL6uifB2Dd+ul425fvqupu4cdB476xR9hn6sBlOxJDfUrIKr5kj7kQh73SLHlthn1ueZkf1OdwQBUOST+Ae+oHAcMdM1JuFNruXXrd5GPassdo+eli+VGaVADlRNn2TgovAEY9XGPCHJuzQkD/qz3TSOLaMK/5O8T9YEDwyCJZKcSSNVmqSC88MrYPuE4Pcz3E+O1bFcDa4gryV4IDp3nX37ChEKpcwFsbZn8ArDmA6lZlsrYUWBdhroX7InFTOhWS0y3Px/u6trwyExBMpvtX7LB5AZ/QHhUQ3u4ayUbSHZCdw6am9uwvX1fXUUoB37EXR6RQngeiYwuAN3Tt67pXc6uHJsKJleBQ91lcT/y5BrOJh2WboT9yeJVv5gj85u3Iv+Epwi2XsoMIIyGv5gYIyhT2Mo5cFzwrYuJsxuErXlyx3Vmg9tuCovzzvA/i0OACX1jd/rmrePF9hZZn41HO17M9Pidq8YJ9vl8Cl3nXTCSC6er/JvK3UCYnFa7yB/5+OD26u9otzolX7xbvsZ+uV3fYljJdV3Xr+SCy/yQDej+tmC8KI+zFFYC6/Y66eyY37/Yywx4+2KRZHmeZ8miCP+h7H1xx3LzbFmEimtZKgjC+7KWew8Hcno1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ68T+gUCVQhJva3QAAAABJRU5ErkJggg=='
      />
    </div>
    <div className="contenedor-flexV " >

    <Link to='/inicio' >inicio</Link>
    <Link to='/acerca de mi' >acerca de mi</Link>
    <Link to='/proyectos' >proyectos</Link>
    <br />
    <Box>Contacto <br /> +503 77405253 </Box>
    </div>
</div>
      );
}