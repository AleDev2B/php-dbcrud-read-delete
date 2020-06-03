function printAllPayments(pagamenti) {
  var target = $("#pagamenti");
  var template = $("#pagamento-template").html();
  var compiled = Handlebars.compile(template);

  for (var pagamento of pagamenti) {
    // console.log(pagamento);
    var pagamentoHTML = compiled(pagamento)
    target.append(pagamentoHTML);
  }
}

function getAllPayments() {
  $.ajax({
    url:"GetAllPayments.php",
    method:"GET",
    success: function(data) {
      printAllPayments(data)
    }, error : function (err) {
      console.error(err);
    }
  })
}

function deletePagamento() {
  var ultimoClick = $(this);
  var pagamentoHTML = ultimoClick.parent();
  var id = pagamentoHTML.data("id");
  console.log("id",id);
  $.ajax({
    url:"deletePagamentoById.php",
    method:"POST",
    data: {
      id:id
    }, success: function () {
      pagamentoHTML.fadeOut("slow", function(){
        pagamentoHTML.remove();
      });
    }, error : function (err) {
      console.error(err);
    }
  })

}

function init() {
  getAllPayments();
  $(document).on("click", "i.fas", deletePagamento);
}

$(document).ready(init);
