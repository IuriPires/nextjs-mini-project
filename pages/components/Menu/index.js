import { Container, ImageWrapper, MenuList } from './styles';

import Image from 'next/image'
import Link from 'next/link'

function Menu() {
    return (
        <Container>
            <ImageWrapper>
                <Image src="/images/superlogo.svg" alt='Supercruises logo' height="80px" width="300"/>
            </ImageWrapper>

            <MenuList>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about-us">
                    <li>About Us</li>
                </Link>
                
                <Link href="/contact">
                    <li>Contact</li>
                </Link>
            </MenuList>
        </Container>
    );
}

export default Menu;