import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritesContextProvider } from '../../../store/favorites-context';
import BookItem from './BookItem';

describe('BookItem component', () => {
  beforeEach(() => {
    render(
      // Rendering BookItem should be rafactored for testing purposes
      <FavoritesContextProvider>
        <BookItem title={'test'} image={'test'} description={'test'} />
      </FavoritesContextProvider>
    );
  });

  describe('when page is initialized', () => {
    it("render 'To Favorites'", async () => {
      const menuButton = screen.getByText('To Favorites', { exact: false });
      expect(menuButton).toBeInTheDocument();
    });

    test('renders posts if request succeeds', async () => {

      // Rendering BookItem should be rafactored for testing purposes
      render(<BookItem title={'test'} image={'test'} description={'test'} />);

      const listItemElements = await screen.findAllByRole('listitem');
      expect(listItemElements).not.toHaveLength(0);
    });
  });

  describe("when 'To Favorites' button is clicked", () => {
    beforeEach(() => {
      userEvent.click(screen.getByRole('button'));
    });

    it("the button title changes 'Remove from Favorites'", () => {
      // "Use Light Theme" text is only shown when the dark theme is active
      expect(
        screen.getByText('Remove from Favorites', { exact: false })
      ).toBeInTheDocument();
    });
  });
});
