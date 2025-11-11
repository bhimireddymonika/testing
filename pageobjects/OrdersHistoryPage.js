class OrdersHistoryPage {
  constructor(page) {
    this.page = page;
    this.ordersTable = page.locator("tbody");
    this.rows = page.locator("tbody tr");
    this.orderdIdDetails = page.locator(".col-text");
  }

  async searchOrderAndSelect(orderId) {
    await this.page.waitForLoadState('networkidle');
    await this.ordersTable.waitFor({ state: 'visible', timeout: 100000 });

    for (let i = 0; i < await this.rows.count(); ++i) {
      const rowOrderId = (await this.rows.nth(i).locator("th").textContent()).trim();
      if (orderId.includes(rowOrderId)) {
        // click view/details button in that row
        await Promise.all([
          this.page.waitForLoadState('networkidle'),
          this.rows.nth(i).locator("button").first().click()
        ]);
        break;
      }
    }
  }

  async getOrderId() {
    await this.orderdIdDetails.waitFor({ state: 'visible', timeout: 5000 });
    return (await this.orderdIdDetails.textContent()).trim();
  }
}

module.exports = { OrdersHistoryPage };
