describe('Test Sample App', () => {
    it('should return valid title on the page', async () => {
        await expect($('#container-HTML5Module---View1--page-title')).toHaveTextContaining('Title');
    });
});
