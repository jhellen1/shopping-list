function shoppingList() {
    $('#js-shopping-list-form').submit(function(e){
        e.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        console.log(newItem);
        let newProduct = `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      $('.shopping-list').append(newProduct);
      $('#shopping-list-entry').val('');
    });
    $('body').on('click','.shopping-item-toggle',function(e){
        e.preventDefault();
        $(e.target).closest('li').children('.shopping-item').toggleClass('shopping-item__checked')
    });
    $('body').on('click','.shopping-item-delete',function(e){
      e.preventDefault();
      $(e.target).closest('li').remove();
  });
}
$(shoppingList)