import {render, screen, cleanup, fireEvent} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import ProductoCard from "../components/ProductoCard/ProductoCard.jsx"

const productoPrueba = {
    id: '1',
    nombre: 'Polera urbana',
    precio: 29990,
    imagen: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
};

describe("Componente ProductoCard", () => {
    let agregar;

    beforeEach( () => {
        agregar = jasmine.createSpy('onAgregar');
        render(
            <MemoryRouter>
                <ProductoCard producto={productoPrueba} onAgregar={agregar} />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    });

    it('Muestra el nombre del producto', () => {
        const titulo = screen.getByRole('heading', {name: 'Polera urbana'});
        expect(titulo.textContent).toBe('Polera urbana')
    });

    it('Muestra el boton para agregar al carrito', () => {
        const boton = screen.getByRole('button', {name: 'Agregar Polera urbana al carrito'});
        expect(boton.disabled).toBeFalse();
    });

    it('Ejecuta onAgregar con el producto al hacer clic', () => {
        const boton = screen.getByRole('button', {name: 'Agregar Polera urbana al carrito'});
        fireEvent.click(boton);
        expect(agregar).toHaveBeenCalledOnceWith(productoPrueba);
    });
});